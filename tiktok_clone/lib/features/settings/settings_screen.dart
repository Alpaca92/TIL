import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool notification = false;

  void _onNotificationChanged(bool? value) {
    if (value == null) return;

    setState(() {
      notification = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: ListView(
        children: [
          SwitchListTile(
            value: notification,
            onChanged: _onNotificationChanged,
            title: const Text('Enable notification'),
          ),
          CheckboxListTile(
            value: notification,
            onChanged: _onNotificationChanged,
            activeColor: Colors.black,
            title: const Text('Enable notification'),
          ),
          ListTile(
            onTap:
                () => showDatePicker(
                  context: context,
                  firstDate: DateTime(1980),
                  lastDate: DateTime(2030),
                ),
            title: const Text('What is your birthday?'),
          ),
          ListTile(
            title: const Text('log out on iOS'),
            onTap: () {
              showCupertinoDialog(
                context: context,
                builder:
                    (context) => CupertinoAlertDialog(
                      title: const Text('Are you sure?'),
                      content: const Text('Please do not go'),
                      actions: [
                        CupertinoDialogAction(
                          onPressed: () => Navigator.of(context).pop(),
                          child: const Text('No'),
                        ),
                        CupertinoDialogAction(
                          onPressed: () => Navigator.of(context).pop(),
                          child: const Text('Yes'),
                        ),
                      ],
                    ),
              );
            },
          ),
          const AboutListTile(),
        ],
      ),
    );
  }
}
