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
    return DefaultTabController(
      length: 2,
      child: CustomScrollView(
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
                Gaps.v14,
                FractionallySizedBox(
                  widthFactor: 1 / 3,
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: Sizes.size12),
                    decoration: BoxDecoration(
                      color: Theme.of(context).primaryColor,
                      borderRadius: BorderRadius.circular(Sizes.size4),
                    ),
                    child: const Text(
                      'Follow',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                Gaps.v14,
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: Sizes.size32),
                  child: Text(
                    'All highlights ...',
                    textAlign: TextAlign.center,
                  ),
                ),
                Gaps.v14,
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    FaIcon(FontAwesomeIcons.link, size: Sizes.size12),
                    Gaps.h4,
                    Text(
                      'https://www.tiktok.com/@nico',
                      style: TextStyle(fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
                Gaps.v20,
                Container(
                  decoration: BoxDecoration(
                    border: Border.symmetric(
                      horizontal: BorderSide(
                        color: Colors.grey.shade300,
                        width: Sizes.size1 / 2,
                      ),
                    ),
                  ),
                  child: const TabBar(
                    labelColor: Colors.black,
                    indicatorColor: Colors.black,
                    indicatorSize: TabBarIndicatorSize.label,
                    labelPadding: EdgeInsets.symmetric(vertical: Sizes.size10),
                    tabs: [
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: Sizes.size20),
                        child: Icon(Icons.grid_4x4_rounded),
                      ),
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: Sizes.size20),
                        child: FaIcon(FontAwesomeIcons.heart),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
