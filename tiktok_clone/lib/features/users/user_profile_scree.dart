import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tiktok_clone/constants/gaps.dart';
import 'package:tiktok_clone/constants/sizes.dart';

class UserProfileScreen extends StatefulWidget {
  const UserProfileScreen({super.key});

  @override
  State<UserProfileScreen> createState() => _UserProfileScreenState();
}

class _UserProfileScreenState extends State<UserProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverAppBar(
          title: const Text('nico'),
          actions: [
            IconButton(
              onPressed: () {},
              icon: const FaIcon(FontAwesomeIcons.gear, size: Sizes.size20),
            ),
          ],
        ),
        SliverToBoxAdapter(
          child: Column(
            children: [
              const CircleAvatar(radius: 50, foregroundColor: Colors.teal),
              Gaps.v20,
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    '@nico',
                    style: TextStyle(
                      fontSize: Sizes.size18,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  Gaps.h5,
                  FaIcon(
                    FontAwesomeIcons.solidCircleCheck,
                    size: Sizes.size16,
                    color: Colors.blue.shade500,
                  ),
                ],
              ),
              Gaps.v24,
              SizedBox(
                height: Sizes.size52,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Column(
                      children: [
                        const Text(
                          '97',
                          style: TextStyle(
                            fontSize: Sizes.size18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Gaps.v3,
                        Text(
                          'Following',
                          style: TextStyle(color: Colors.grey.shade500),
                        ),
                      ],
                    ),
                    VerticalDivider(
                      width: Sizes.size32,
                      thickness: Sizes.size1,
                      color: Colors.grey.shade400,
                      indent: Sizes.size14,
                      endIndent: Sizes.size14,
                    ),
                    Column(
                      children: [
                        const Text(
                          '10M',
                          style: TextStyle(
                            fontSize: Sizes.size18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Gaps.v3,
                        Text(
                          'Followers',
                          style: TextStyle(color: Colors.grey.shade500),
                        ),
                      ],
                    ),
                    VerticalDivider(
                      width: Sizes.size32,
                      thickness: Sizes.size1,
                      color: Colors.grey.shade400,
                      indent: Sizes.size14,
                      endIndent: Sizes.size14,
                    ),
                    Column(
                      children: [
                        const Text(
                          '194.3M',
                          style: TextStyle(
                            fontSize: Sizes.size18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Gaps.v3,
                        Text(
                          'Likes',
                          style: TextStyle(color: Colors.grey.shade500),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
