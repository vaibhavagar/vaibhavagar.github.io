import React from "react";

class Themes extends React.Component {
  render() {
    return (
      <div className="cp-section__themes">
        <h1>Themes</h1>
        <p>My Wordpress themes and plugins</p>
          <div className="cp-themeplugin">
            <div className="cp-themeplugin__section">
              <h3>ULTIMA GAMING THEME - Wordpress Theme</h3>
              <p>Ultima Gaming theme is perfect for all types of gaming websites. Get up and running with your Wordpress website in less than one hour!</p>
              <ul>
                <li>Streamers (Twitch, Mixer and YouTube)</li>
                <li>Gaming News</li>
                <li>Gaming Teams</li>
                <li>Gaming Teams</li>
                <li>Esports Organizations</li>
              </ul>
              <a href="https://www.gamingwebsitethemes.com/" target="_blank" rel="noopener noreferrer">Read More and Buy</a>
            </div>
            <div className="cp-themeplugin__section">
              <h3>Easy Embed for YouTube Wall - Wordpress Plugin</h3>
              <p>YouTube Easy Embed (Wall) is a plugin to integrate a Youtube wall on any section of your page. Are you looking to create a wall that pulls in videos from defined channel, playlist or a set of comma separated videos? If yes, this is an ideal and easy to use plugin that works based off a shortcode.</p>
              <p>Features: </p>
              <ul>
                <li>Streamers (Twitch, Mixer and YouTube)</li>
                <li>Pull in videos based off Playlist ID</li>
                <li>Gaming Teams</li>
                <li>Pull in videos based off comma seperated video id’same</li>
                <li>Option to choose the count of videos to display on the wall per section</li>
              </ul>
              <a href="https://wordpress.org/plugins/easy-embed-for-youtube-wall/" target="_blank" rel="noopener noreferrer">Free Version</a>
              <a href="https://www.streamweasels.com/store/plugins/youtube-wall-pro/?ref=gamingwebsitethemes" target="_blank" rel="noopener noreferrer">Paid Version</a>
            </div>
            <div className="cp-themeplugin__section">
              <h3>Easy Embed for Social Media Wall - Wordpress Plugin</h3>
              <p>Embed Facebook Videos, Posts and Live Status easily. Customise your Facebook Wall and display on your page with easy-to-use Shortcodes.</p>
              <p>Features: </p>
              <ul>
                <li>Pull in videos based off facebook Page ID</li>
                <li>Pull in Live Streaming based off facebook Page ID</li>
                <li>options to customize Section max width, background color, column count, border color, colum spacing</li>
              </ul>
              <a href="https://wordpress.org/plugins/easy-embed-for-social-media/" target="_blank" rel="noopener noreferrer">Free Version</a>
              <a href="https://www.streamweasels.com/store/plugins/facebook-wall-pro/?ref=gamingwebsitethemes" target="_blank" rel="noopener noreferrer">Paid Version</a>
            </div>
          </div>
      </div>
    );
  }
}

export default Themes;
