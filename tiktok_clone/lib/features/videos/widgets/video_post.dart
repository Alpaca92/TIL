import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:visibility_detector/visibility_detector.dart';

class VideoPost extends StatefulWidget {
  final Function onVideoFinished;
  final int index;

  const VideoPost({
    super.key,
    required this.onVideoFinished,
    required this.index,
  });

  @override
  State<VideoPost> createState() => _VideoPostState();
}

class _VideoPostState extends State<VideoPost> {
  final VideoPlayerController _videoPlayerController =
      VideoPlayerController.asset('assets/videos/video.mp4');

  void _onVideoChange() {
    if (_videoPlayerController.value.isInitialized) {
      // 영상 길이와 현재 재생위치가 같을 때 => 영상을 끝까지 시청했을 때
      if (_videoPlayerController.value.duration ==
          _videoPlayerController.value.position) {
        widget.onVideoFinished();
      }
    }
  }

  void _initVideoPlayer() async {
    await _videoPlayerController.initialize();
    _videoPlayerController.play();
    setState(() {});
    _videoPlayerController.addListener(_onVideoChange);
  }

  @override
  void initState() {
    super.initState();
    // _initVideoPlayer();
  }

  @override
  void dispose() {
    _videoPlayerController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return VisibilityDetector(
      key: Key('${widget.index}'),
      onVisibilityChanged: (info) {
        print('#${widget.index}: ${info.visibleFraction * 100}');
      },
      child: Stack(
        children: [
          Positioned.fill(
            // child: _videoPlayerController.value.isInitialized
            //     ? VideoPlayer(_videoPlayerController)
            //     : Container(
            //         color: Colors.black,
            //       ),
            child: Container(),
          ),
        ],
      ),
    );
  }
}