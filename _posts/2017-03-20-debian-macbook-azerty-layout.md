---
layout: post
custom_css: syntax
title:  "Macbook AZERTY Keyboard Layout with Debian/Ubuntu"
excerpt: "It's 2017 already, for christ's sake."
date:   2017-03-20
---

If you're like me, you probably wanted at some point to install a Debian/Ubuntu VM on your Macbook.

Problem is, with an international keyboard layout (say, French AZERTY) and the
default settings, many keys are misconfigured and you cannot even type basic
characters such as the pipe (`|`) or the tilde (`~`). Good luck working with
anything shell-related.

Don't waste time fiddling with keyboard layouts and models in your desktop
environment of choice. Turns out, you only need to do this:

``` shell_session
$ sudo $EDITOR /etc/default/keyboard
```

Now edit this file to match those settings:

``` conf
XKBMODEL="pc105"
XKBLAYOUT="fr"
XKBVARIANT="mac"
XKBOPTIONS="lv3:ralt_switch,apple:badmap"
```

Reboot and all shall be well. If not, check that you have not altered keyboard
settings in your DE; If so, reset to the default settings.

You can compose special characters with the right
<kbd>Option</kbd> key (e.g. <kbd>Option</kbd><kbd>Shift</kbd><kbd>L</kbd> to
insert `|`), same as macOS. This should work with the Magic Keyboard as well,
since it shares the same layout as the Macbook.
