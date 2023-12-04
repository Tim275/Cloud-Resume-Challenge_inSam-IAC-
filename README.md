<h1>Cloud Resume Project</h1>
![image](https://github.com/Tim275/Cloud-Resume-Challenge/assets/117520669/fc847aed-77b1-48a3-ad0c-81f4488f2495)

<h2>Description</h2>
 The goal of this project was to leverage the power of the Cloud (in my case AWS) and some of it's key services to create a fully functioning serverless web application that "serves" (no pun intended) as a resume or portfolio.

In summary, I setup an S3 bucket that stores all of my React files for the website, and linked it as an origin to my CloudFront distribution to host the website.  Then i adjusted the counter.

After the site was functional and in production, I integrated CI/CD using GitHub actions to run a YAML workflow that updates my S3 bucket automatically after I commit and sync any code changes I make to my site via VSCode. <br />


<h2>Environments Used </h2>

- <b>AWS Route 53</b>
- <b>AWS CloudFront</b>
- <b>AWS Certificate Manager</b>
- <b>Amazon S3</b>
- <b>AWS Lambda</b>
- <b>AWS DynamoDB</b>
- <b>GitHub Actions</b>
