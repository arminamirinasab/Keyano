const pianoNotes = [
  { key: 109, src: "A0" },
  { key: 107, src: "Ab1" },
  { key: 12, src: "B0" },
  {key: 106 , src: "Bb0"},
  {key: 105 , src: "C1"},
  {key: 102 , src: "D1"},
  {key: 99 , src: "Db1"},
  {key: 110 , src: "E1"},
  {key: 111 , src: "Eb1"},
  {key: 104 , src: "F1"},
  {key: 101 , src: "G1"},
  {key: 98 , src: "Gb1"},
  {key: 96 , src: "A1"},
  {key: 144 , src: "Ab2"},
  {key: 103 , src: "B1"},
  {key: 100 , src: "Bb1"},
  {key: 97 , src: "C2"},
  {key: 19 , src: "D2"},
  {key: 33 , src: "Db2"},
  {key: 34 , src: "E2"},
  {key: 39 , src: "Eb2"},
  {key: 145 , src: "F2"},
  {key: 36 , src: "G2"},
  {key: 35 , src: "Gb2"},
  {key: 38 , src: "A2"},
  {key: 40 , src: "Ab3"},
  {key: 45 , src: "B2"},
  {key: 46 , src: "Bb2"},
  {key: 37 , src: "C3"},
  {key: 123 , src: "D3"},
  {key: 8 , src: "Db3"},
  {key: 220 , src: "E3"},
  {key: 16 , src: "Eb3"},
  {key: 17 , src: "F3"},
  {key: 13 , src: "G3"},
  {key: 122 , src: "Gb3"},
  {key: 187 , src: "A3"},
  {key: 221 , src: "Ab4"},
  {key: 222 , src: "B3"},
  {key: 191 , src: "Bb3"},
  {key: 219 , src: "C4"},
  {key: 121 , src: "D4"},
  {key: 120 , src: "Db4"},
  {key: 189 , src: "E4"},
  {key: 80 , src: "Eb4"},
  {key: 186 , src: "F4"},
  {key: 190 , src: "G4"},
  {key: 48 , src: "Gb4"},
  {key: 79 , src: "A4"},
  {key: 76 , src: "Ab5"},
  {key: 188 , src: "B4"},
  {key: 119 , src: "Bb4"},
  {key: 18 , src: "C5"},
  {key: 118 , src: "D5"},
  {key: 57 , src: "Db6"},
  {key: 75 , src: "E5"},
  {key: 73 , src: "Eb5"},
  {key: 77 , src: "F5"},
  {key: 32 , src: "G5"},
  {key: 117 , src: "Gb5"},
  {key: 56 , src: "A5"},
  {key: 116 , src: "Ab6"},
  {key: 55 , src: "B5"},
  {key: 85 , src: "Bb5"},
  {key: 74 , src: "C6"},
  {key: 78 , src: "D6"},
  {key: 54 , src: "Db7"},
  {key: 89 , src: "E6"},
  {key: 72 , src: "Eb6"},
  {key: 115 , src: "F6"},
  {key: 53 , src: "G6"},
  {key: 84 , src: "Gb6"},
  {key: 71 , src: "A6"},
  {key: 66 , src: "Ab7"},
  {key: 114 , src: "B6"},
  {key: 52 , src: "Bb6"},
  {key: 82 , src: "C7"},
  {key: 70 , src: "D7"},
  {key: 86 , src: "Db8"},
  {key: 113 , src: "E7"},
  {key: 51 , src: "Eb7"},
  {key: 69 , src: "F7"},
  {key: 68 , src: "G7"},
  {key: 67 , src: "Gb7"},

  {key: 112 , src: "A7"},
  {key: 50 , src: "B7"},
  {key: 87 , src: "Bb7"},
  {key: 83 , src: "C8"},
  {key: 88 , src: "G7"},
  {key: 49 , src: "Gb7"},
];
const $ = document;
const notesDirectory = "./notes/";

for (let i = 0; i < pianoNotes.length; i++) {
  const audioElem = $.createElement("audio");
//   audioElem.setAttribute("controls" , "true");
  audioElem.id = pianoNotes[i].key;
  audioElem.src = notesDirectory + pianoNotes[i].src + ".mp3";
  document.body.append(audioElem);
}

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    console.log(e.keyCode);
    const audios = $.getElementsByTagName("audio");
    for (let i = 0; i < audios.length; i++) {
        audios[i].pause();
        audios[i].currentTime = 0;
    }
  pianoNotes.forEach(function (note) {
    const selectedElement = $.getElementById(note.key);
    if (e.keyCode == note.key) {
      selectedElement.play();
    }
  });
});
