import React from 'react';

class Dog extends React.Component {
     


    render() {
        return(
        <section>
            <div className='logo'>Creative</div>
            <img alt="dog" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg" className="bg"/>
            <h2>Let's Make <br/>Something Creative</h2>
            <div className="content">
            <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half
               a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a 
               single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles 
               of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea.
               In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
            <a href="#">Get Started</a>      
            </div>
            <p className="copyrightText">@2020. Sanjeev Yogi</p>
        </section> 
        )   
    }
}

export default Dog