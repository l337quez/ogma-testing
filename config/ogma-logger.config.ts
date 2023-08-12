import { ConfigModule, ConfigService } from '@nestjs/config';
import { appendFile } from 'fs';
import { FastifyParser } from '@ogma/platform-fastify';
import { WsParser } from '@ogma/platform-ws';
import { OgmaModuleOptions } from '@ogma/nestjs-module';

/*
 *  Ogma Logger Config
 *  https://ogma.jaymcdoniel.dev/en/introduction/
 */
export default class OgmaLoggerConfig {
  static getOgmaLoggerConfig(configService: ConfigService): OgmaModuleOptions {
    return {
      json: true,
      color: true,
      stream: {
        write: (mensaje: string | Uint8Array) => {
          appendFile(
            '/home/ronal/git/ogma-testing/config/logs-ogma.log',
            mensaje,
            (err) => {
              if (err) {
                throw err;
              }
             // console.log("el mensaje", mensaje)
             // return true;
            },
          );
        },
      },

    };
  }
}

export const ogmaLoggerConfigAsync: any = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<OgmaModuleOptions> =>
    OgmaLoggerConfig.getOgmaLoggerConfig(configService),
  inject: [ConfigService],
};
