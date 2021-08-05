
import styled from "styled-components"

function Header() {
    return (
        <Head>
        <div className="header-inner-div">
            <div className="logo">
                <svg viewBox="0 0 256 276" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M238 223.1a41 41 0 01-46 35c-7-.8-13.8-3-21-7.1-10-5.5-19.8-14-31.4-26.8 18.2-22.3 29.2-42.7 33.4-61 1.9-8.5 2.2-16.2 1.3-23.4a44.7 44.7 0 00-7.4-18.7 46.5 46.5 0 00-38.9-19.6c-16 0-30.3 7.4-38.9 19.6a44.8 44.8 0 00-7.4 18.7 57.3 57.3 0 001.3 23.5c4.2 18.2 15.5 38.9 33.4 61.2A123.8 123.8 0 0185 251.3c-7.2 4.1-14.1 6.3-21 7.1a41 41 0 01-46-35c-.9-6.9-.3-13.8 2.4-21.5.9-2.8 2.2-5.5 3.6-8.8l6.4-13.8.2-.6c19-41 39.5-83 60.7-123.8l.8-1.7 6.7-12.7c2.2-4.4 4.6-8.5 7.7-12a28.8 28.8 0 0144.1 0c3 3.5 5.5 7.6 7.7 12 2.2 4.2 4.4 8.6 6.7 12.7l.8 1.7c21 41 41.4 83 60.4 124.1v.3c2.2 4.4 4.1 9.4 6.3 13.8 1.4 3.3 2.8 6 3.6 8.8 2.2 7.2 3 14 2 21.2zm-110-13c-14.9-18.7-24.6-36.3-27.9-51.2a44.5 44.5 0 01-.8-16.9c.6-4.4 2.2-8.2 4.4-11.5 5.3-7.5 14-12.2 24.3-12.2 10.2 0 19.3 4.4 24.3 12.2 2.2 3.3 3.8 7.1 4.4 11.5.8 5 .5 10.8-.8 16.9-3.4 14.6-13 32.2-27.9 51.3zm124.4-14.3l-4.2-10-6.3-14-.3-.2c-19-41.4-39.4-83.3-61-124.7l-.8-1.7c-2.2-4.1-4.4-8.5-6.6-13-2.7-4.9-5.5-10.1-9.9-15.1a44.5 44.5 0 00-35-17.1C114.5 0 102 6 93 16.6a95 95 0 00-10 15.1l-6.6 13-.8 1.6c-21.2 41.4-42 83.3-61 124.7l-.2.6-6.4 14c-1.4 3-2.7 6.4-4.1 10a58.6 58.6 0 0062 79.4 72.8 72.8 0 0027.6-9.4c11.3-6.3 22-15.4 34.2-28.7a144.9 144.9 0 0034.2 28.7 72.9 72.9 0 0034.8 10 58.5 58.5 0 0058.2-50.2 52.1 52.1 0 00-2.5-29.6z" fill="currentColor"></path></svg>
                <span>airbnb</span>
            </div>
            <nav>
                <a href="#" className="active">Places to stay</a>
                <a href="#">Experiences</a>
                <a href="#">Online Experiences</a>
            </nav>
             <form className="search" style={{transform: 'translate(-50% 150%)', width: '60vw' }}>
                 <input type="text" placeholder="Where are you going?"/>
                     <button aria-label="search places">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                         </svg>
                <span>Search</span>
                </button>
             </form>
             <div className="profile-avatar">
                 <a href="#">Become a host</a>
                 <a href="#" className="globe">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                     </svg>
                     </a>
                 <div className="user">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                     </svg>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="userIcon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                     </svg>
                 </div>
                 </div>
            </div>
        </Head>
    )
}

export default Header

const Head= styled.div`
position: fixed;
    top: 0px;
    color: #fafafa;
    padding: 1.5rem 3rem;
    width: 100%;
    z-index: 10;
    transition: background 0.2s ease 0s;
    .header-inner-div{
    max-width:1200px;
    margin:0 auto;
    }
    .header-inner-div, .logo, .profile-avatar, .globe, .user{
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    }
    > div{
        flex: 0 0 20%;
    }
    .logo svg {
    height: 2rem;
    color: #fff;
    transition: color 0.2s ease 0s;
}
.logo span {
    font-weight: 600;
    font-size: 1.15rem;
    margin-left: 0.5rem;
}
form{
    position: absolute;
    transform: translate(-50%, 150%);
    left: 50%;
    background: #fafafa;
    padding: 0.5rem;
    border-radius: 99px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 600px;
    margin: 1.5rem;
    width: 60vw;
    box-shadow: 0 1rem 3rem -1rem #484848;;
    transition: all 0.2s ease 0s;
    transform-origin: center center;
}
form input{
    background: none;
    border: none;
    font-size: 1.15rem;
    flex: 1 1 0%;
    padding: 0px 1.5rem;
    color: var(--dark);
    outline: none;
}
form button{
    background: #e0565b;
    color: #fafafa;
    border: none;
    padding: 0.5rem calc(0.875rem);
    height: 3rem;
    max-width: 300px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 99px;
    font-weight: 700;
    font-size: 1rem;
    overflow: hidden;
}
.logo svg{
height: 2rem;
    color: var(--light);
    transition: color 0.2s ease 0s;
}
nav a:hover::before,  nav a.active::before {
    transform: scaleX(1);
}
nav a::before {
    position: absolute;
    content: "";
    width: 1.5rem;
    height: 2px;
    border-radius: 2px;
    background: #fafafa;
    bottom: -0.5rem;
    left: calc(50% - 0.75rem);
    transform: scaleX(0);
    transform-origin: center center;
    transition: transform 0.2s ease 0s;
}
nav{
    display:flex;
    flex: 1 1 0%;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.2s ease 0s;
}
nav a{
    position: relative;
}
nav a + a {
    margin-left: 1.5rem;
}
a, button, input {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
}
.profile-avatar{
    display:flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    white-space: nowrap;
}
.profile-avatar a  {
margin-right:1.5rem;
}
.globe svg{
    margin-right:1.5rem !important;
}
.user{
    background: #fafafa;
    border-radius: 99px;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
}
.menu{
    color: #484848;
    margin-right: 0.5rem;
}
.userIcon{
    background: #484848;
    border-radius: 99px;
    height: 1.5rem;
    width: 1.5rem;
    color: #fafafa;
}
`