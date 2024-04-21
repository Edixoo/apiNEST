import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const token = context.switchToHttp().getRequest().headers['authorization'].replace('Bearer ', '');

        const retour = await fetch('http://localhost:3036/' + token).then(response => {

            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })

        if(retour.roles.contains("admin")) {
            return true;
        } else {
            throw new UnauthorizedException();
        }
    }
}
