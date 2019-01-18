function countLetters(string) {
  const count = {};

  // Going through each letter
  string.split('').forEach(letter => {
    const l = letter.toLowerCase();

    // Removing spec characters
    if (!'!? @.,/'.includes(l))
    // if (/[a-z0-9]/.test(l))
      count[l] ? count[l] += 1 : count[l] = 1;
  });
  
  console.log(count);
}

countLetters('Hello world!');