import { sign, verify } from 'jsonwebtoken';
import { config } from '@config';
import { DecodedToken } from '@interfaces';

export const generateToken = async (id: string): Promise<string> => {
  const payload = {
    id
  };
  return await new Promise((resolve, reject) => {
    sign(
      payload,
      config.auth.jwtSecret,
      { expiresIn: config.auth.jwtExpires },
      (err: Error | null, token: string | undefined) => {
        if (err) {
          console.log(err);
          reject(new Error('Error generating token'));
        } else {
          resolve(token as string);
        }
      }
    );
  });
};

export const decodedToken = async (token: string): Promise<DecodedToken> => {
  return await new Promise((resolve, reject) => {
    verify(token, config.auth.jwtSecret, (err, decoded) => {
      if (err) {
        console.log(err);
        reject(new Error('Error verifying token'));
      } else {
        resolve(decoded as DecodedToken);
      }
    });
  });
};
