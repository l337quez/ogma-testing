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
  static getOgmaLoggerConfig(configService: ConfigService): any {
    return {
      servicio: {
        json: true,
        timestamp: true,
        color: true,
        context: false,
        levels: ['log', 'warn', 'error', 'debug'],
        stream: {
          write: (mensaje) => {
            appendFile(
              'logs-ogma',
              mensaje,
              (err) => {
                if (err) {
                  throw err;
                }
                return true;
              },
            );
          },
        },
        application: "Testing-OGMA",
      },
      interceptor: {
        http: FastifyParser,
        ws: WsParser
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
