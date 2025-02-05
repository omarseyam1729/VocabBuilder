const getRandomWord = async () => {
    try {
      const response = await fetch('http://192.168.1.252:5000/api/words/random'); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const word = await response.json();
      return word;
    } catch (error) {
      console.error('Error fetching random word from API:', error);
    }
  };

  export { getRandomWord };
  