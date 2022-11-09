import { useState } from 'react';
import axios from 'axios';

const url = 'https://czm07-hdpc-sb-euw-fd.azurefd.net/api/fhir/Patient';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    
    // console.log('fetch dad joke');
    try {
      const{data} = await axios(url, {
        headers: {
          method: 'GET',
          mode: 'no-cors',
          Accept: 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Ocp-Apim-Subscription-Key': 'a2b486f067a0a87dafd59f97b3d20427', 
          Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InBzSVRWcEtib0dWTHFycGhiS2dIbWRMbXVlQ3hTdV9KcXRUTjRsMUNncTAifQ.eyJleHAiOjE2NjgwMzIyNzEsIm5iZiI6MTY2ODAyODY3MSwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9iMmNzdGFnZS56ZWlzcy5jb20vNDgzZjQ0OWItNmEwZC00MzU0LWI3ZTctMzcxMTNlN2Q0Y2ExL3YyLjAvIiwic3ViIjoiTm90IHN1cHBvcnRlZCBjdXJyZW50bHkuIFVzZSBvaWQgY2xhaW0uIiwiYXVkIjoiZTIyYTM1Y2QtNjgzYS00ZTZmLTg5OTQtZDBkNzcwM2MwM2JkIiwiYWNyIjoiYjJjXzFhX3plaXNzaWRyb3Bjc2lnbmluIiwiaWF0IjoxNjY4MDI4NjcxLCJhdXRoX3RpbWUiOjE2NjgwMjg2NzEsIm9pZCI6IjFmNGIwODU0LTdhODItNDEzZC04ZTQ2LWJlOGI3M2U3YWM3YSIsIlplaXNzSWRCYXNlIjoie1xyXG4gIFwiYWNjb3VudElkXCI6IDQxOTIwMCxcclxuICBcImZpcnN0TmFtZVwiOiBcIkhEUFwiLFxyXG4gIFwibGFzdE5hbWVcIjogXCJIYWNrYXRob24gMVwiLFxyXG4gIFwiZU1haWxcIjogXCJoZHBoYWNrYXRob24xQGlkLnplaXNzLmNvbVwiLFxyXG4gIFwibGFzdENoYW5nZVwiOiBcIjIwMjItMTEtMDhUMTM6Mjg6NTMuNzY3XCIsXHJcbiAgXCJpZGVudGl0eVByb3ZpZGVyXCI6IDYsXHJcbiAgXCJqb2JUaXRsZVwiOiBcIlwiLFxyXG4gIFwiZGVwYXJ0bWVudFwiOiBcIlwiLFxyXG4gIFwic2FsdXRhdGlvblwiOiBcIm5hXCIsXHJcbiAgXCJsYW5ndWFnZVwiOiBcIlwiLFxyXG4gIFwiZGF0ZU9mQmlydGhcIjogXCJcIlxyXG59IiwiWmVpc3NJZENvbnRhY3QiOiJ7XHJcbiAgXCJzdHJlZXRcIjogXCJcIixcclxuICBcImhvdXNlTnVtYmVyXCI6IFwiXCIsXHJcbiAgXCJ6aXBcIjogXCJcIixcclxuICBcImNpdHlcIjogXCJcIixcclxuICBcImNvdW50cnlcIjogXCJERVwiLFxyXG4gIFwiY2VsbFBob25lXCI6IFwiXCIsXHJcbiAgXCJwaG9uZVwiOiBcIlwiLFxyXG4gIFwiZmF4XCI6IFwiXCIsXHJcbiAgXCJmZWRlcmFsU3RhdGVcIjogXCJcIlxyXG59IiwiWmVpc3NJZE9yZ2FuaXNhdGlvbiI6IntcclxuICBcIm9yZ2FuaXNhdGlvbklkXCI6IDc0OTU5LFxyXG4gIFwibmFtZVwiOiBcIkNhcmwgWmVpc3MgRGlnaXRhbCBJbm5vdmF0aW9uIEdtYkhcIixcclxuICBcInN0cmVldFwiOiBcIkZyaXR6LUZvZXJzdGVyLVBsYXR6IDJcIixcclxuICBcImhvdXNlTnVtYmVyXCI6IFwiXCIsXHJcbiAgXCJjaXR5XCI6IFwiRHJlc2RlblwiLFxyXG4gIFwiemlwXCI6IFwiMDEwNjlcIixcclxuICBcImNvdW50cnlcIjogXCJERVwiLFxyXG4gIFwiemVpc3NDdXN0b21lck5vXCI6IFwiMDAwMTA4MjQ4NVwiLFxyXG4gIFwiemVpc3NTZWNvbmRhcnlSZWZlcmVuY2VcIjogbnVsbCxcclxuICBcInplaXNzM3JkUGFydHlTeXN0ZW1cIjogXCJQMTBcIixcclxuICBcImxhc3RDaGFuZ2VcIjogXCIyMDIxLTA2LTA4VDA4OjUyOjExLjMwN1wiLFxyXG4gIFwiZmVkZXJhbFN0YXRlXCI6IFwiXCIsXHJcbiAgXCJncm91cFwiOiBmYWxzZSxcclxuICBcInBhcmVudE9yZ2FuaXNhdGlvbklkXCI6IG51bGwsXHJcbiAgXCJvcmdhbmlzYXRpb25WZXJpZmljYXRpb25cIjogMVxyXG59IiwiWmVpc3NJZEFwcGxpY2F0aW9uIjoie1xyXG4gIFwiY2xpZW50QXBwSWRcIjogMTc5LFxyXG4gIFwiYXBwbGljYXRpb25Eb21haW5JZFwiOiA1LFxyXG4gIFwidGVybXNBbmRDb25kaXRpb25zSWRcIjogMTI2LFxyXG4gIFwiYWNjZXB0YW5jZU9mVGVybXNBbmRDb25kaXRpb25zSWRcIjogODQ0NzE2LFxyXG4gIFwiZGlyZWN0QWNjZXNzXCI6IGZhbHNlLFxyXG4gIFwiaW52aXRhdGlvbklkXCI6IDI3Njc5NlxyXG59IiwiWmVpc3NJZEN1c3RvbUZpZWxkcyI6Int9IiwiWmVpc3NJZEFncmVlbWVudHMiOiJ7XHJcbiAgXCJhZ3JlZW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJhZ3JlZW1lbnRJZFwiOiA3NjY4LFxyXG4gICAgICBcImlzQWdyZWVtZW50TWFuYWdlclwiOiBmYWxzZVxyXG4gICAgfVxyXG4gIF1cclxufSIsImdldE1vcmVDbGFpbXMiOiIiLCJhdF9oYXNoIjoiVHdnNGptWHNNcGFwc0dNSkc5eUg4USJ9.A7OHR1yfkVx9UGSHAz7AEDE3KnPxnHJeBPhqEAz_TQjkLAfT4CmfmYffjr9oXhP2HFdW-1p2SCej4yacBen48HHFue4pT-eepyP2xKSAcAo-nlOLOQ4xeHf5XVBuz-dDBqH1fkNpLxdbM3R-5RuurNmzTpbX2gDJCFD8NrTZ6iz1T_LO4KAgh7MmNOcapxikins9V1teCgTmm1lFm0iXcczNSbaIVZGRbrSSH17qEOAJJ6H4PBeqtNnI-EE0vbMrc8PU_-ZyRpzBF5ouic5uRK3OuviwBwmDZxLA-wY1JKB6OQBoDKxEC9gA9CChIcgadlc2Xv0C3rgQjJfmq9A7_w',
        },
      });
setJoke(data.joke);
    } catch (error) {
      console.log(error.response)
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
