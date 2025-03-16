import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tiktok_clone/constants/gaps.dart';
import 'package:tiktok_clone/constants/sizes.dart';
import 'package:tiktok_clone/features/authentication/email_screen.dart';
import 'package:tiktok_clone/features/authentication/login_screen.dart';
import 'package:tiktok_clone/features/authentication/username_screen.dart';
import 'package:tiktok_clone/features/authentication/widgets/auth_button.dart';
import 'package:tiktok_clone/utils.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({super.key});

  void _onLoginTap(BuildContext context) {
    Navigator.of(
      context,
    ).push(MaterialPageRoute(builder: (context) => const LoginScreen()));
  }

  void _onEmailTap(BuildContext context) {
    Navigator.of(
      context,
    ).push(MaterialPageRoute(builder: (context) => const UsernameScreen()));
  }

  void _onAppleTap(BuildContext context) {
    Navigator.of(
      context,
    ).push(MaterialPageRoute(builder: (context) => const EmailScreen()));
  }

  @override
  Widget build(BuildContext context) {
    return OrientationBuilder(
      builder: (context, orientation) {
        return Scaffold(
          body: SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: Sizes.size40),
              child: Column(
                children: [
                  Gaps.v80,
                  Text(
                    'Sign up for TikTok',
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  Gaps.v20,
                  Text(
                    'Create aprofile, follow other accounts, make your own videos, and more.',
                    style: TextStyle(
                      fontSize: Sizes.size16,
                      color:
                          isDarkMode(context)
                              ? Colors.grey.shade300
                              : Colors.black45,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  Gaps.v40,
                  if (orientation == Orientation.portrait) ...[
                    AuthButton(
                      onTap: () => _onEmailTap(context),
                      icon: const FaIcon(FontAwesomeIcons.user),
                      text: 'Use email & password',
                    ),
                    Gaps.v16,
                    AuthButton(
                      onTap: () => _onAppleTap(context),
                      icon: const FaIcon(FontAwesomeIcons.apple),
                      text: 'Continue with Apple',
                    ),
                  ],
                  if (orientation == Orientation.landscape) ...[
                    Row(
                      children: [
                        Expanded(
                          child: AuthButton(
                            onTap: () => _onEmailTap(context),
                            icon: const FaIcon(FontAwesomeIcons.user),
                            text: 'Use email & password',
                          ),
                        ),
                        Gaps.h16,
                        Expanded(
                          child: AuthButton(
                            onTap: () => _onAppleTap(context),
                            icon: const FaIcon(FontAwesomeIcons.apple),
                            text: 'Continue with Apple',
                          ),
                        ),
                      ],
                    ),
                  ],
                ],
              ),
            ),
          ),
          bottomNavigationBar: BottomAppBar(
            elevation: 1,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: Sizes.size32),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('Already have an account?'),
                  Gaps.h5,
                  GestureDetector(
                    onTap: () => _onLoginTap(context),
                    child: Text(
                      'Log in',
                      style: TextStyle(
                        color: Theme.of(context).primaryColor,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
