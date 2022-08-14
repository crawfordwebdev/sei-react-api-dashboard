const BASE_URL = `${process.env.REACT_APP_DYNDNS}`
const API_PORT = 5001


// 1. `POST` to `/rgb` accepts a JSON object in the following format:  `{"r": XXX, "g": YYY, "b": ZZZ}` where `XXX`, `YYY`, and `ZZZ` are integers representing the red, green, and blue values for a color.  A successful request will adjust the color of the RGB LED connected to a Raspberry Pi that is running the server that’s accepting the requests!  (In Ben’s garage!)  
    
//     ⚠️ If the LED is in use when the request is received, you will receive a `503` status response.  After the color has been displayed for 5 seconds, you will receive a `201` status response.
    
    
// 2. `POST` to `/message` accepts a JSON object in the following format: `{"message": "This is where your message goes."}`.  A successful request will display the message content on an OLED display connected to the Raspberry Pi running the server!
    
//     ⚠️ If the OLED display is in use when the request is received, you will receive a `503` status response.  After the message has been displayed, you will receive a `201` status response.  If the message contains over 100 characters, you will receive a `400` status response.
    
    
// 3. You can also send `GET` requests to the following endpoints, each of which will display a fun animation on the OLED display:
//     1. `/runner` - a person will run across the screen.
//     2. `/stars` - you’ll feel like you’re in space!
//     3. `/invaders` - a mini-game of Space Invaders played out on the display.
//     4. `/snow` - remember snow on old TV screens?
//     5. `/matrix` - enter the matrix?
//     6. `/starwars` - a scrolling display from a classic 1977 hit movie
    
//     ⚠️ If the OLED display is in use when the request is received, you will receive a `503` status response.  After the animation has finished, you will receive a `201` status response.
    
//     </aside>

export async function getRunner() {
  const res = await fetch(`${BASE_URL}:${API_PORT}/runner`)
  return res.json()
}

export async function getMatrix() {
  const res = await fetch(`${BASE_URL}:${API_PORT}/matrix`)
  return res.json()
}
