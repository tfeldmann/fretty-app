export const Tunings = Object.freeze(
  [
    {
      instrument: "Guitar (6-String)",
      tunings: [
        { name: "Standard", tuning: "E A D G B E" },
        { name: "Drop D", tuning: "D A D G B E" },
        { name: "Half Step Down", tuning: "D# G# C# F# A# D#" },
        { name: "Full Step Down", tuning: "D G C F A D" },
        { name: "1 and 1/2 Steps Down", tuning: "C# F# B E G# C#" },
        { name: "Double Drop D", tuning: "D A D G B D" },
        { name: "Drop C", tuning: "C G C F A D" },
        { name: "Drop C#", tuning: "C# G# C# F# A# D#" },
        { name: "Drop B", tuning: "B F# B E G# C#" },
        { name: "Drop A#", tuning: "A# F A# D# G C" },
        { name: "Drop A", tuning: "A E A D F# B" },
        { name: "Open D", tuning: "D A D F# A D" },
        { name: "Open D Minor", tuning: "D A D F A D" },
        { name: "Open G", tuning: "D G D G B D" },
        { name: "Open G Minor", tuning: "D G D G A# D" },
        { name: "Open C", tuning: "C G C G C E" },
        { name: "Open C#", tuning: "C# F# B E G# C#" },
        { name: "Open C Minor", tuning: "C G C G C D#" },
        { name: "Open E", tuning: "E G# D E B E" },
        { name: "Open E Minor7", tuning: "E B D G B E" },
        { name: "Open G Major7", tuning: "D G D F# B D" },
        { name: "Open A Minor", tuning: "E A E A C E" },
        { name: "Open A Minor7", tuning: "E A E G C E" },
        { name: "Open E", tuning: "E B E G# B E" },
        { name: "Open A", tuning: "E A C# E A E" },
        { name: "C Tuning", tuning: "C F A# D# G C" },
        { name: "C# Tuning", tuning: "C# F# B E G# C#" },
        { name: "Bb Tuning", tuning: "A# D# G# C# F A#" },
        { name: "A to A (Baritone)", tuning: "A D G C E A" },
        { name: "D A D D D D", tuning: "D A D D D D" },
        { name: "C G D G B D", tuning: "C G D G B D" },
        { name: "C G D G B E", tuning: "C G D G B E" },
        { name: "D A D E A D", tuning: "D A D E A D" },
        { name: "D G D G A D", tuning: "D G D G A D" },
        { name: "Open Dsus2", tuning: "D A D G A D" },
        { name: "Open Gsus2", tuning: "D G D G C D" },
        { name: "G", tuning: "D G D G B E" },
        { name: "Modal G", tuning: "D G D G C D" },
        { name: "Overtone", tuning: "C E G A# C D" },
        { name: "Pentatonic", tuning: "A C D E G A" },
        { name: "Minor Third", tuning: "C D# F# A C D#" },
        { name: "Major Third", tuning: "C E G# C E G#" },
        { name: "All Fourths", tuning: "E A D G C F" },
        { name: "Augmented Fourths", tuning: "C F# C F# C F#" },
        { name: "Slow Motion", tuning: "D G D F C D" },
        { name: "Admiral", tuning: "C G D G B C" },
        { name: "Buzzard", tuning: "C F C G A# F" },
        { name: "Face", tuning: "C G D G A D" },
        { name: "Four and Twenty", tuning: "D A D D A D" },
        { name: "Ostrich", tuning: "D D D D D D" },
        { name: "Capo 20", tuning: "C G D D# D D#" },
        { name: "Balalaika", tuning: "E A D E E A" },
        { name: "Charango", tuning: " G C E A E" },
        { name: "Cittern One", tuning: "C F C G C D" },
        { name: "Cittern Two", tuning: "C G C G C G" },
        { name: "Dobro Open G", tuning: "G B D G B D" },
        { name: "Lefty", tuning: "E B G D A E" },
        { name: "Mandoguitar", tuning: "C G D A E B" },
        { name: "Rusty Cage", tuning: "B A D G B E" },
      ]
    },
    {
      // http://bassguitarplayerworld.com/advanced/alternate-tunings/
      // https://www.schoolofrock.com/resources/bass-guitar/beginners-guide-to-tuning-a-bass-guitar
      instrument: "Bass (4-String)",
      tunings: [
        { name: "Standard", tuning: "E A D G" },
        { name: "Drop D", tuning: "D A D G" },
        { name: "Drop C", tuning: "C G C F" },
        { name: "Drop B", tuning: "B F# B E" },
        { name: "D Standard", tuning: "D G C F" },
        { name: "C to thirds", tuning: "C G C G" },
      ]
    },
    {
      instrument: "Bass (5-String)",
      tunings: [
        { name: "Standard", tuning: "B E A D G" },
        { name: "High C", tuning: "E A D G C" },
      ]
    },
    {
      instrument: "Bass (6-String)",
      tunings: [
        { name: "Standard", tuning: "B E A D G C" }]
    },
    {
      instrument: "Ukulele",
      tunings: [
        { name: "C6", tuning: "G C E A" },
        { name: "D6", tuning: "A D F# B" },
      ]
    },
    {
      instrument: "Violin",
      tunings: [
        { name: "Standard", tuning: "G D A E" },
        { name: "Cajun", tuning: "F C G D" },
        { name: "Open G", tuning: "G D G B" },
        { name: "Sawmill", tuning: "G D G D" },
        { name: "Gee-Dad", tuning: "G D A D" },
        { name: "Open D", tuning: "D D A D" },
        { name: "High Bass, Old-Timey D", tuning: "A D A E" },
        { name: "Cross A", tuning: "A E A E" },
      ]
    },
    {
      instrument: "Russian Guitar",
      tunings: [
        { name: "Standard", tuning: "D G B D G B D" },
        { name: "Classical", tuning: "C G B D G B D" },
      ]
    },

    {
      instrument: "Sitar",
      tunings: [
        { name: "Standard", tuning: "C C G C G C F x C C B C D E F G A B C D E" },
      ]
    },
  ]);
