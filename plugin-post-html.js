import posthtml from 'posthtml';
import expressions from 'posthtml-expressions';
import include from 'posthtml-include';
import About from './src/components/About.jsx';
import Contact from './src/components/Contact.jsx';
import Experience from './src/components/Experience.jsx';
import Feedbacks from './src/components/Feedbacks.jsx';
import Hero from './src/components/Hero.jsx';
import Navbar from './src/components/Navbar.jsx';
import Tech from './src/components/Tech.jsx';
import Works from './src/components/Works.jsx';

// import linkyfy from './plugin-linkyfy';
const postHtml = () => ({
    name: 'post-html-plugin',

    transformIndexHtml: async html => {
        const result = await posthtml([
            include({ root: './' }),
            expressions({
                locals: {
                    About,
                    Contact,
                    Experience,
                    Feedbacks,
                    Hero,
                    Navbar,
                    Tech,
                    Works,
                }
            }),
            // linkyfy('INO', 'https://www.ino.global/en/')
        ]).process(html, {
            from: './index.html'
        });

        return result.html;
    }
});

export default postHtml;