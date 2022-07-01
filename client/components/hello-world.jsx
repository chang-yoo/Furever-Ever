import React, { useEffect } from 'react';
import fetch from 'node-fetch';

export default function HelloWorld() {

  useEffect(() => {
    fetch('https://api.petfinder.com/v2/animals?limit=100', {
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4OHZtMVMxOFJkTTBsdXowYzY1SHlBcldYT1JjQzEwVnhRZUQ1cGFrSmREaVNMWDBLMyIsImp0aSI6ImU1NTA5MWI0YWQ5ODdmYmU3N2ViYTlhMzJmNzBhYjZmYTM1MzcyZDY0YzMyZDQ4OWE3YTU5ZmUxNzcwMjA1MDFiNGEyYTVhZDFhM2M3YjQwIiwiaWF0IjoxNjU2Njg1NzA4LCJuYmYiOjE2NTY2ODU3MDgsImV4cCI6MTY1NjY4OTMwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.uTbGxrOV3duwLzQdK15DJGG50Cesvvyf9wmEEFycfqaq9UV_NHbDVPDY1QCtZMds0GcW0rC7HFIApgGo88GFGUKvlPjn01E09XiTItakVtvvCyA2_TG5wYhAerGb6aev9-fnobjp5ykQTfnaXAk6mbE72LsObHvqpwVr25pMfpGqgydYcW6qNhQc-_eo0sAbScTVToQ3B6LE7myAIsajQU8KlEJ_ECxGSmNS2yhHuAghH3ob6F2k-h0tlWYCCwFsBynx-OTgsPk7kQ-Aufffot3aHwwadpbtwFfMDME_9LouwvQG2xz9WMl2g080Us0ONe9Xvw82pZnPn4Qzhv66GQ'
      }
    })
      .then(response => response.json())
      .then(data => {

      });
  }
  );

  return (
    <div>
      checking
    </div>
  );
}
