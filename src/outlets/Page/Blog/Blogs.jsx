import React from "react";

import { FaDownload } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="my-20 px-4">
        <div className="mb-10">
          {/* Question 01 */}
          <h2 className="text-2xl font-bold">
            Compare SQL and NoSQL databases?
          </h2>
          <p>
            SQL databases are relational, and NoSQL databases are
            non-relational. SQL databases use structured query language (SQL)
            and have a predefined schema. NoSQL databases have dynamic schemas
            for unstructured data.
          </p>
          <p>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. .
          </p>
          <p>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON
          </p>
        </div>
        {/* Question 02 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">What is Nest JS ?</h2>
          <p>
            NestJS is an open-source framework that helps you build scalable
            Node.js server-side applications. Heavily inspired by Angular, it is
            built on Typescript and uses progressive JavaScript. It has a simple
            design with 3 main components: controllers, modules and providers.
          </p>
          <h2 className="text-2xl font-bold">What Is Express JS?</h2>
          <p>
            Express is a node js web application framework that provides broad
            features for building web and mobile applications. It is used to
            build a single page, multipage, and hybrid web application.
          </p>
        </div>
        {/* Question 03 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
        {/* Question 04 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            What is an access token and refresh token?
          </h2>
          <p>
            An access token is a tiny piece of code that contains a large amount
            of data. Information about the user, permissions, groups, and
            timeframes is embedded within one token that passes from a server to
            a user's device.
          </p>

          <p>
            A refresh token must not allow the client to gain any access beyond
            the scope of the original grant. The refresh token exists to enable
            authorization servers to use short lifetimes for access tokens
            without needing to involve the user when the token expires.
          </p>
          <h2 className="text-2xl font-bold">
            How do they work and where should we store them on the client-side?
          </h2>
          <p>
            Access tokens are used to authenticate and authorize access to
            resources, while refresh tokens obtain new access tokens. Store them
            securely on the client-side using secure HTTP-only cookies, browser
            Web Storage API with caution, in-memory storage for SPAs, or native
            mobile storage mechanisms. Ensure HTTPS for secure transmission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
