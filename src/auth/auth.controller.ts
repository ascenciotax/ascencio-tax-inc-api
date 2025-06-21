import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import {
  SignInDto,
  SignUpDto,
  VerifyCodeDto,
  ResendEmailVerificationCodeDto,
  ResendResetPasswordCodeDto,
  ChangePasswordDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from './dto/';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  login(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signup')
  register(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('verify-email')
  verifyEmail(@Body() verifyCodeDto: VerifyCodeDto) {
    return this.authService.verifyEmailCode(verifyCodeDto);
  }

  @Post('resend-email-verification')
  @HttpCode(HttpStatus.OK)
  resendEmailVerification(
    @Body() resendEmailVerificationCodeDto: ResendEmailVerificationCodeDto,
  ) {
    return this.authService.resendEmailVerification(
      resendEmailVerificationCodeDto,
    );
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post('resend-reset-password-code')
  @HttpCode(HttpStatus.OK)
  resendResetPasswordCode(
    @Body() resendResetPasswordCodeDto: ResendResetPasswordCodeDto,
  ) {
    return this.authService.resendResetPasswordCode(resendResetPasswordCodeDto);
  }

  @Get('check-status')
  @Auth()
  @HttpCode(HttpStatus.OK)
  checkStatus(@GetUser() user: User) {
    return this.authService.checkStatus(user);
  }

  @Post('change-password')
  @Auth()
  changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @GetUser() user: User,
  ) {
    return this.authService.changePassword(changePasswordDto, user);
  }

  @Post('delete-account')
  @Auth()
  deleteAccount(@GetUser() user: User) {
    return this.authService.deleteAccount(user);
  }
}
