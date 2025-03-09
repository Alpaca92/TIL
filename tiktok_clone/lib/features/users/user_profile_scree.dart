import 'package:flutter/material.dart';
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
        SliverPersistentHeader(delegate: CustomDelegate(), pinned: true),
        SliverGrid(
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
          gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 100,
            mainAxisSpacing: Sizes.size20,
            crossAxisSpacing: Sizes.size20,
            childAspectRatio: 1,
          ),
        ),
      ],
    );
  }
}

class CustomDelegate extends SliverPersistentHeaderDelegate {
  @override
  Widget build(
    BuildContext context,
    double shrinkOffset,
    bool overlapsContent,
  ) {
    return Container(
      color: Colors.indigo,
      child: const FractionallySizedBox(
        heightFactor: 1,
        child: Center(
          child: Text('Title !!!', style: TextStyle(color: Colors.white)),
        ),
      ),
    );
  }

  @override
  double get maxExtent => 100;

  @override
  double get minExtent => 100;

  @override
  bool shouldRebuild(covariant SliverPersistentHeaderDelegate oldDelegate) {
    return false;
  }
}
