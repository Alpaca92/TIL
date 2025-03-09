import 'package:flutter/material.dart';

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
        const SliverAppBar(title: Text('hello'), floating: true),
        SliverFixedExtentList(
          itemExtent: 100,
          delegate: SliverChildBuilderDelegate(
            childCount: 50,
            (context, index) => Container(
              color: Colors.primaries[index % Colors.primaries.length],
              child: Align(
                alignment: Alignment.center,
                child: Text('Item $index'),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
