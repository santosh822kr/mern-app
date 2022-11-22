import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleLg'>Group Study</span>
      </div>
      <img
        className='headerImg'
        src='https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
      />
    </div>
  );
}
