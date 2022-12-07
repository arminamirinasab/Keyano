const pianoNotes = [
  { key: 109, src: "A0" },
  { key: 107, src: "Ab1" },
  { key: 13, src: "B0" },
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
  {key: 106 , src: "D2"},
  {key: 106 , src: "Db2"},
  {key: 106 , src: "E2"},
  {key: 106 , src: "Eb2"},
  {key: 106 , src: "F2"},
];
const $ = document;
const notesDirectory = "./notes/";

for (let i = 0; i < pianoNotes.length; i++) {
  const audioElem = $.createElement("audio");
  audioElem.setAttribute("controls" , "true");
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
