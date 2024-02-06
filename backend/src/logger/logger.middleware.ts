import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const date = new Date();
    date.setHours(date.getHours() - 3);

    const logMessage = `Request made to: ${req.originalUrl} with method: ${req.method} at time: ${date.toISOString()}`;

    console.log(logMessage);

    const logFileName = `${date.toISOString().split('T')[0]}.log`;
    const logFilePath = path.join('logs', logFileName);

    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs');
    }

    if (!fs.existsSync(logFilePath)) {
      fs.writeFileSync(logFilePath, '');
    }

    fs.appendFile(logFilePath, logMessage + '\n', (err) => {
      if (err) {
        console.error('Error while registering log', err);
      }
    });

    next();
  }
}
