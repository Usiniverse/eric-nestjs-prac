import { Inject, Injectable } from '@nestjs/common';
import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';
import emailConfig from '../config/emailConfig';
import { ConfigType } from '@nestjs/config';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_GMAIL',
        pass: 'YOUR_PASSWORD',
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = this.config.baseUrl;
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
    const html = `
      <h1>회원가입을 축하드립니다.</h1>
      <p>아래 링크를 클릭하시면 이메일 인증이 완료됩니다.</p>
      <a href="${url}">${url}</a>
    `;
    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      //
      html: '가입 확인 버튼을 누르시면 가입 인증이 완료됩니다.<br/> <form action="${url}" method="POST"> <button>가입확인</button> </form>',
    };

    return await this.transporter.sendMail(mailOptions); //
  }
}
