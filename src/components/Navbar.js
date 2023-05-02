import reviewData from '../data/review_data.json';
import siteData from '../data/site_data.json';
import guideData from '../data/sc_data.json';
import Link from 'next/link';
const Navbar = () => {
  const reviews = reviewData.posts;
  const guides = guideData.posts;
  console.log(guides)
  return (
    <div className="navbar  bg-primary">
      <div className="navbar-start">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">{siteData.name}</Link>
          </div>
        </div>
        
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/*<li><a>Item 1</a></li>*/}
            <li tabIndex={0}>
              <Link href="/reviews">
                Reviews
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="p-2 bg-base-100">
                {reviews.slice(0,5).map( (review) => 
                  <li key ={review.id}><a href={`/${review.slug}`}>{review.title.slice(0,75)}</a></li>
                  )}
                
                
              </ul>
            </li>

            <li tabIndex={1}>
              <Link href="/guides">
                Guides
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="p-2 bg-base-100">
                {guides.map( (guide) => 
                  <li key ={guide.id}><a href={`/${guide.slug}`}>{guide.title.slice(0,75)}</a></li>
                  )}
                
                
              </ul>
            </li>
            
          </ul>
        </div>
    </div>
    )}

export default Navbar;

