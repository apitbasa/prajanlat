import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const GeneratePDF = dynamic(()=>import("./../src/components/GeneratePDF"),{ssr:false});
const app =()=>{
        const ref = React.useRef();

        return(
        <div className="main">
        <div className="content" ref={ref}>            
            <Image id="image" src="/images/partner.png" width="300" height="200"/>
            <h1 id="title">Árajánlat</h1>
            <div id="partners" className="div_partners">
                <div className="text_half">
                    Árajánlat adó
                </div>
                <div className="text_half">
                    Árajánlat részére
                </div>
            </div>
            
            <div className="div_clear">

            </div>
            <div id="long_text" className="text_fw">
            Congratulations! You have successfully created a new Next.js project using either of these methods. From here, you can continue building and customizing your application according to your needs.

Navigating Pages and Routes
In this section, we will discuss how to navigate through pages and routes in a Next.js project. Navigation is an essential part of any web application, and understanding how it works in Next.js is crucial for building a successful project.

Next.js uses a file-based routing system, meaning that each page in your project corresponds to a specific file inside the pages directory. For example, if you create a file called about.js inside the pages directory, it will automatically be rendered as the /about route on your website.

To navigate between pages within your project, you can use the component provided by Next.js. This component allows you to create links between pages without having to reload the entire page. It also ensures that all necessary data is prefetched for better performance.

Let's take an example of how we can use the  component in our project. Suppose we have two pages - index.js and about.js In our index page, we want to create a link that navigates us to our about page. We can do so by importing the Link component from next/link and wrapping our anchor tag around it.
Congratulations! You have successfully created a new Next.js project using either of these methods. From here, you can continue building and customizing your application according to your needs.

Navigating Pages and Routes
In this section, we will discuss how to navigate through pages and routes in a Next.js project. Navigation is an essential part of any web application, and understanding how it works in Next.js is crucial for building a successful project.

Next.js uses a file-based routing system, meaning that each page in your project corresponds to a specific file inside the pages directory. For example, if you create a file called about.js inside the pages directory, it will automatically be rendered as the /about route on your website.

To navigate between pages within your project, you can use the component provided by Next.js. This component allows you to create links between pages without having to reload the entire page. It also ensures that all necessary data is prefetched for better performance.

Let's take an example of how we can use the  component in our project. Suppose we have two pages - index.js and about.js In our index page, we want to create a link that navigates us to our about page. We can do so by importing the Link component from next/link and wrapping our anchor tag around it.
Congratulations! You have successfully created a new Next.js project using either of these methods. From here, you can continue building and customizing your application according to your needs.

Navigating Pages and Routes
In this section, we will discuss how to navigate through pages and routes in a Next.js project. Navigation is an essential part of any web application, and understanding how it works in Next.js is crucial for building a successful project.

Next.js uses a file-based routing system, meaning that each page in your project corresponds to a specific file inside the pages directory. For example, if you create a file called about.js inside the pages directory, it will automatically be rendered as the /about route on your website.

To navigate between pages within your project, you can use the component provided by Next.js. This component allows you to create links between pages without having to reload the entire page. It also ensures that all necessary data is prefetched for better performance.

Let's take an example of how we can use the  component in our project. Suppose we have two pages - index.js and about.js In our index page, we want to create a link that navigates us to our about page. We can do so by importing the Link component from next/link and wrapping our anchor tag around it.
Congratulations! You have successfully created a new Next.js project using either of these methods. From here, you can continue building and customizing your application according to your needs.

Navigating Pages and Routes
In this section, we will discuss how to navigate through pages and routes in a Next.js project. Navigation is an essential part of any web application, and understanding how it works in Next.js is crucial for building a successful project.

Next.js uses a file-based routing system, meaning that each page in your project corresponds to a specific file inside the pages directory. For example, if you create a file called about.js inside the pages directory, it will automatically be rendered as the /about route on your website.

To navigate between pages within your project, you can use the component provided by Next.js. This component allows you to create links between pages without having to reload the entire page. It also ensures that all necessary data is prefetched for better performance.

Let's take an example of how we can use the  component in our project. Suppose we have two pages - index.js and about.js In our index page, we want to create a link that navigates us to our about page. We can do so by importing the Link component from next/link and wrapping our anchor tag around it.
            </div>

            <div id="feltételek" className="text_fw">
                Feltételek:
                <ul>
                    <li>
                        Feltétel 1
                    </li>
                    <li>
                        Feltétel 2
                    </li>
                    <li>
                        Feltétel 3
                    </li>
                </ul>
            </div>
        </div>
            <GeneratePDF html={ref}/>
        </div>
        );
}

export default app;