"use client";

import { useEffect } from "react";

export default function AsciiLogger() {
  useEffect(() => {
    console.log(
      `%c
    _                                _                    
   / \\   _ ____   _____  ___| |__   __ _ _ __  
  / _ \\ | '_ \\ \\ / / _ \\/ __| '_ \\ / _\` | '_ \\ 
 / ___ \\| | | \\ V /  __/\\__ \\ | | | (_| | | | |
/_/   \\_\\_| |_|\\_/ \\___||___/_| |_|\\__,_|_| |_|
                                                
>> Welcome to Anveshan | Explore. Innovate. Build. <<
>> Bhagwan Parshuram Institute of Technology <<
>> https://anveshan.dev <<
`,
      "font-family: monospace; color: #FFBE0D; font-weight: bold;",
    );
  }, []);

  return null;
}
