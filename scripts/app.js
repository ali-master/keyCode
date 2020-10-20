// <refrence title="javascript keyCode" patch="https://css-triks.com/snippets/javascript/javascript-keycodes" />
'use strict';

(function(){
	var key = function(){
		this.keyCode = this.keyCode || "unknown";
		this.keyName = this.keyName || "undefinded";
	}
	key.prototype.name = {
		// underlist powerd by: keycode.info
		0 : "Windows Menu (Windows-oriented keyboard used on Mac)",
		3 : "break",
		8 : "backspace / delete",
		9 : "tab",
		12 : 'clear / NUM_LOCK_MAC',
		13 : "enter",
		16 : "shift",
		17 : "ctrl ",
		18 : "alt",
		19 : "pause/break",
		20 : "caps lock",
		27 : "escape",
		32 : "spacebar",
		33 : "page up",
		34 : "page down",
		35 : "end",
		36 : "home ",
		37 : "left arrow ",
		38 : "up arrow ",
		39 : "right arrow",
		40 : "down arrow ",
		41 : "select",
		42 : "print",
		43 : "execute",
		44 : "Print Screen",
		45 : "insert ",
		46 : "delete",
		48 : "0",
		49 : "1",
		50 : "2",
		51 : "3",
		52 : "4",
		53 : "5",
		54 : "6",
		55 : "7",
		56 : "8",
		57 : "9",
		59 : "semicolon (firefox), equals",
		60 : "<",
		61 : "equals (firefox)",
		63 : "ß",
		65 : "a",
		66 : "b",
		67 : "c",
		68 : "d",
		69 : "e",
		70 : "f",
		71 : "g",
		72 : "h",
		73 : "i",
		74 : "j",
		75 : "k",
		76 : "l",
		77 : "m",
		78 : "n",
		79 : "o",
		80 : "p",
		81 : "q",
		82 : "r",
		83 : "s",
		84 : "t",
		85 : "u",
		86 : "v",
		87 : "w",
		88 : "x",
		89 : "y",
		90 : "z",
		91 : "Windows Key / Left ⌘ / Chromebook Search key",
		92 : "right window key ",
		93 : "Windows Menu / Right ⌘",
		96 : "numpad 0 ",
		97 : "numpad 1 ",
		98 : "numpad 2 ",
		99 : "numpad 3 ",
		100 : "numpad 4 ",
		101 : "numpad 5 ",
		102 : "numpad 6 ",
		103 : "numpad 7 ",
		104 : "numpad 8 ",
		105 : "numpad 9 ",
		106 : "multiply ",
		107 : "add",
		108 : "numpad period (firefox)",
		109 : "subtract ",
		110 : "decimal point",
		111 : "divide ",
		112 : "f1 ",
		113 : "f2 ",
		114 : "f3 ",
		115 : "f4 ",
		116 : "f5 ",
		117 : "f6 ",
		118 : "f7 ",
		119 : "f8 ",
		120 : "f9 ",
		121 : "f10",
		122 : "f11",
		123 : "f12",
		124 : "f13",
		125 : "f14",
		126 : "f15",
		127 : "f16",
		128 : "f17",
		129 : "f18",
		130 : "f19",
		144 : "num lock ",
		145 : "scroll lock",
		160 : "^",
		163 : "#",
		167 : "page forward (Chromebook)",
		173 : "minus (firefox), mute/unmute",
		174 : "decrease volume level",
		175 : "increase volume level",
		176 : "next",
		177 : "previous",
		178 : "stop",
		179 : "play/pause",
		180 : "e-mail",
		181 : "mute/unmute (firefox)",
		182 : "decrease volume level (firefox)",
		183 : "increase volume level (firefox)",
		186 : "semi-colon / ñ",
		187 : "equal sign ",
		188 : "comma ",
		189 : "dash ",
		190 : "period ",
		191 : "forward slash / ç",
		192 : "grave accent ",
		193 : "?, / or °",
		194 : "numpad period (chrome)",
		219 : "open bracket ",
		220 : "back slash ",
		221 : "close bracket ",
		222 : "single quote ",
		223 : "`",
		224 : "left or right ⌘ key (firefox)",
		225 : "altgr",
		226 : "< /git >",
		230 : "GNOME Compose Key",
		255 : "toggle touchpad"
	};

	key.prototype.code = function (){
		var self = this;
		document.addEventListener("keyup", function (e) {
			var e = e ? e : window.event;
			e.metaKey ? e.preventDefault() : "";

			self.keyCode = e.keyCode || e.which;
			self.keyName = self.name[self.keyCode];

			document.getElementById('name').textContent = self.keyName;
			document.getElementById('code').textContent = self.keyCode;
		}, true);
	};
	window.key = key || {};
})();

var keyinfo = new key();
keyinfo.code();
