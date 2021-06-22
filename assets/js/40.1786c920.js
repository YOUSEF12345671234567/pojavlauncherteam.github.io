(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{401:function(e,a,t){"use strict";t.r(a);var o=t(44),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"getting-pojavlauncher-from-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-pojavlauncher-from-source"}},[e._v("#")]),e._v(" Getting PojavLauncher from source")]),e._v(" "),t("p",[e._v("PojavLauncher is open-source, and whether it be that you wish to tet code changes or try out the newest features manually, you can!")]),e._v(" "),t("h2",{attrs:{id:"prerequesites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequesites"}},[e._v("#")]),e._v(" Prerequesites")]),e._v(" "),t("p",[e._v("We've recently overhauled our build system to use Makefiles rather than shell scripts, so regardless of the build OS, you're going to need "),t("code",[e._v("make")]),e._v(".")]),e._v(" "),t("p",[e._v("Since you can compile PojavLauncher on more than one operating system, you'll need to get the required dependencies according to your setup.")]),e._v(" "),t("p",[t("strong",[e._v("macOS")])]),e._v(" "),t("ul",[t("li",[e._v("Xcode 11.7 or higher\n"),t("ul",[t("li",[e._v("This version runs on macOS Catalina 10.15.2 or later.")])])]),e._v(" "),t("li",[e._v("Homebrew dependencies\n"),t("ul",[t("li",[t("code",[e._v("cmake")]),e._v(", "),t("code",[e._v("ldid")]),e._v(", "),t("code",[e._v("fakeroot")]),e._v(", "),t("code",[e._v("dpkg")]),e._v(", and "),t("code",[e._v("gradle")]),e._v(".")])])])]),e._v(" "),t("p",[t("strong",[e._v("iOS")])]),e._v(" "),t("ul",[t("li",[e._v("A jailbreak\n"),t("ul",[t("li",[e._v("We recommend using Procursus")]),e._v(" "),t("li",[t("code",[e._v("clang")]),e._v(", "),t("code",[e._v("dpkg-dev")]),e._v(", and "),t("code",[e._v("openjdk-16-jdk")]),e._v(" on Procursus")]),e._v(" "),t("li",[t("code",[e._v("clang")]),e._v(" and "),t("code",[e._v("dpkg-perl")]),e._v(" on others")]),e._v(" "),t("li",[e._v("Make sure you have "),t("code",[e._v("openjdk-16-jdk")]),e._v(", not "),t("code",[e._v("openjdk-16-jre")]),e._v(". Other jailbreaks without Procursus do not have "),t("code",[e._v("openjdk-16-jdk")]),e._v(".")])])]),e._v(" "),t("li",[e._v("An SDK for iOS 14 or higher\n"),t("ul",[t("li",[e._v("You can get usable SDKs from "),t("a",{attrs:{href:"https://github.com/xybp888/iOS-SDKs",target:"_blank",rel:"noopener noreferrer"}},[e._v("xybp888/iOS-SDKs"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("You need to put this in "),t("code",[e._v("/usr/share/SDKs")]),e._v(" as "),t("code",[e._v("iPhoneOS.sdk")]),e._v(". Symlinking also works here.")])])])]),e._v(" "),t("h2",{attrs:{id:"building"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[e._v("#")]),e._v(" Building")]),e._v(" "),t("p",[e._v("It's time to get through the actual building process and cover each option.")]),e._v(" "),t("p",[t("strong",[e._v("macOS Note:")]),e._v(" If you wish to use some of these options, run "),t("code",[e._v("export DEVICE_IP=<your.idevice.ip.here> DEVICE_PORT=<your ssh port>")]),e._v(". This way you can take full advantage of the Makefile.")]),e._v(" "),t("h3",{attrs:{id:"make"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make"}},[e._v("#")]),e._v(" make")]),e._v(" "),t("p",[e._v("The option simply runs everything else (except deploy).")]),e._v(" "),t("h3",{attrs:{id:"make-native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-native"}},[e._v("#")]),e._v(" make native")]),e._v(" "),t("p",[e._v("This option compiles the Objective-C code that is used to draw the UI and interface with Java (located in "),t("code",[e._v("Natives")]),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"make-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-java"}},[e._v("#")]),e._v(" make java")]),e._v(" "),t("p",[e._v("This option compiles the Java code that is used to interface with Minecraft itself (located in "),t("code",[e._v("JavaApp")]),e._v(").")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" If compiling on iOS, you cannot use this option unless you have a Procursus bootstrap.")]),e._v(" "),t("h3",{attrs:{id:"make-extras"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-extras"}},[e._v("#")]),e._v(" make extras")]),e._v(" "),t("p",[e._v("This options compiles the assets and storyboards that are used as the foundation of the app (located in "),t("code",[e._v("Natives/Assets.xcassets")]),e._v(" and "),t("code",[e._v("Natives/en.lproj")]),e._v(").")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" If compiling on iOS, this option is disabled as the required tools are not available. Pre-compiled versions are used instead when packaging.")]),e._v(" "),t("h3",{attrs:{id:"make-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-package"}},[e._v("#")]),e._v(" make package")]),e._v(" "),t("p",[e._v("This option creates a .deb package from the completed app. It requires that you have compiled native, java, and extra before packaging.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" If compiling with an M1 Mac, you may have issues with "),t("code",[e._v("fakeroot")]),e._v(" not being available due to Homebrew dropping support. We recommend you use Procursus' macOS bootstrap instead")]),e._v(" "),t("h3",{attrs:{id:"make-deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-deploy"}},[e._v("#")]),e._v(" make deploy")]),e._v(" "),t("p",[e._v('This option "piggybacks" an existing install of PojavLauncher and only copies the newly built natives. It requires that you have compiled native. If you\'re on macOS, it connects to your iDevice and copies to there.')]),e._v(" "),t("h3",{attrs:{id:"make-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-install"}},[e._v("#")]),e._v(" make install")]),e._v(" "),t("p",[e._v("This option uninstalls any other versions and installe your newly compiled .deb. This required that you have compiled package. If you're on macOS, it connects to your iDevice and installs there.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" If this option fails, you can still manually copy the package contents and run "),t("code",[e._v("uicache -p /Applications/PojavLauncher.app")])])])}),[],!1,null,null,null);a.default=s.exports}}]);