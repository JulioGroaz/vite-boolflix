export function getFlag(language) {
    const flags = {
      'en': 'https://flagcdn.com/w320/us.png',
      'it': 'https://flagcdn.com/w320/it.png',
    };
    return flags[language] || 'https://flagcdn.com/w320/un.png';
  }
  