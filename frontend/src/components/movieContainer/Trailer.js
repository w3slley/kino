import {Component} from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon} from 'react-share';

class Trailer extends Component {
  render() { 
    const url = "https://youtube.com/watch?v="+this.props.youtubeId;
    return (
      <div style={{marginBottom: '50px'}}>
        <h1>Trailer</h1>
        <iframe style={{border: 'none'}} title={this.props.youtubeId} width='80%' height='500px'  src={`https://youtube.com/embed/${this.props.youtubeId}`}></iframe>
        <div className='mt-3'>
          <p>Share trailer with your friends: </p>
          <FacebookShareButton className="ml-3 mr-3" children={<FacebookIcon size={32} round={true} />} url={url} />
          <TwitterShareButton className="ml-3 mr-3" children={<TwitterIcon size={32} round={true} />} url={url} />
          <TelegramShareButton className="ml-3 mr-3" children={<TelegramIcon size={32} round={true} />} url={url} />
          <WhatsappShareButton className="ml-3 mr-3" children={<WhatsappIcon size={32} round={true} />} url={url} />
        </div>
      </div>
    );
  }
}
 
export default Trailer;