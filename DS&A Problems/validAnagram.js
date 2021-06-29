// This problem comes from a DS&A course by Colt Steele
// In this particular problem, I went over a pattern that
// is common. It's coined 'Frequency Counter' in the course.
// Also, this was solved in the course's IDE.

// Given two strings, write a function to determine if the second
// string is an anagram of the first.

// An anagram is a word, phrase, or name formed by rearranging
// the letters of another, such as cinema, formed iceman.

// Examples:
// validAnagram('', '') true
// validAnagram('aaz', 'zza') false
// validAnagram('anagram', 'nagaram') true
// validAnagram('rat', 'car') false

function validAnagram(str1, str2){
  let chars = {};

  if (str1.length !== str2.length) {
      return false;
  }

  for (let i = 0; i < str1.length; i++) {
      if (!chars[str1[i]]) {
          chars[str1[i]] = 1;
      } else {
          chars[str1[i]]++;
      }
  }

  for (let j = 0; j < str2.length; j++) {
      if (!chars[str2[j]]) {
          return false
      } else {
          chars[str2[j]]--;
      }
  }
  return true;
}