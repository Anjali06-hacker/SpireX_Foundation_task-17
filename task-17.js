/* ================= JOB DATA ================= */
/*  This array contains sample job listings.
    In a real job portal, this information
    would normally come from a database
    or backend API.*/
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechSolutions",
        category: "Technology",
        location: "Remote",
        salary: "₹4 - ₹7 LPA",
        description:
            "We are looking for a frontend developer who can work with HTML, CSS and JavaScript to create responsive websites."
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "CreativeStudio",
        category: "Design",
        location: "Bangalore",
        salary: "₹3 - ₹6 LPA",
        description:
            "Design attractive and user-friendly interfaces for web and mobile applications."
    },
    {
        id: 3,
        title: "Digital Marketing Executive",
        company: "MarketPro",
        category: "Marketing",
        location: "Delhi",
        salary: "₹3 - ₹5 LPA",
        description:
            "Plan digital marketing campaigns and help improve the company's online presence."
    },
    {
        id: 4,
        title: "Financial Analyst",
        company: "FinServe",
        category: "Finance",
        location: "Mumbai",
        salary: "₹5 - ₹8 LPA",
        description:
            "Assist with financial reports, data analysis and business decision-making."
    },
    {
        id: 5,
        title: "JavaScript Developer",
        company: "CodeWorks",
        category: "Technology",
        location: "Bangalore",
        salary: "₹5 - ₹9 LPA",
        description:
            "Develop interactive web applications using JavaScript and modern web technologies."
    },
    {
        id: 6,
        title: "Graphic Designer",
        company: "DesignHub",
        category: "Design",
        location: "Remote",
        salary: "₹3 - ₹5 LPA",
        description:
            "Create graphics, promotional material and visual content for digital platforms."
    },
    {
        id: 7,
        title: "Marketing Intern",
        company: "GrowthTech",
        category: "Marketing",
        location: "Delhi",
        salary: "₹15,000 / month",
        description:
            "Assist the marketing team with campaigns, research and social media activities."
    },
    {
        id: 8,
        title: "Account Executive",
        company: "BusinessWorld",
        category: "Finance",
        location: "Mumbai",
        salary: "₹3 - ₹5 LPA",
        description:
            "Handle accounting tasks, financial records and basic reporting."
    }
];
/* ================= DISPLAY JOBS ================= */
/*  This function displays job cards
    on the webpage.*/
function displayJobs(jobList = jobs) {
    const jobContainer =
        document.getElementById("jobList");
    // Clear existing job cards
    jobContainer.innerHTML = "";
    // Show message if no job matches
    if (jobList.length === 0) {
        jobContainer.innerHTML = `
            <p class="no-jobs">
                No jobs found. Try a different search.
            </p>
        `;
        return;
    }
    // Create a card for each job
    jobList.forEach(function(job) {
        const card =
            document.createElement("div");
        card.className = "job-card";
        card.innerHTML = `
            <h3>
                ${job.title}
            </h3>
            <p>
                <strong>Company:</strong>
                ${job.company}
            </p>
            <span class="category">
                ${job.category}
            </span>
            <p>
                <strong>Location:</strong>
                ${job.location}
            </p>
            <p>
                <strong>Salary:</strong>
                ${job.salary}
            </p>
            <button
                onclick="showJobDetails(${job.id})"
            >
                View Details
            </button>
        `;
        jobContainer.appendChild(card);
    });
}
/* ================= SEARCH AND FILTER ================= */
/*  This function searches and filters
    the available jobs. */
function filterJobs() {
    // Get search text
    const searchText =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase();
    // Get selected category
    const selectedCategory =
        document.getElementById(
            "categoryFilter"
        ).value;
    // Get selected location
    const selectedLocation =
        document.getElementById(
            "locationFilter"
        ).value;
    // Filter jobs
    const filteredJobs =
        jobs.filter(function(job) {
            // Check job title or company
            const matchesSearch =
                job.title
                    .toLowerCase()
                    .includes(searchText) ||
                job.company
                    .toLowerCase()
                    .includes(searchText);
            // Check category
            const matchesCategory =
                selectedCategory === "all" ||
                job.category === selectedCategory;
            // Check location
            const matchesLocation =
                selectedLocation === "all" ||
                job.location === selectedLocation;
            // Return only jobs that match
            // all selected conditions
            return (
                matchesSearch &&
                matchesCategory &&
                matchesLocation
            );
        });
    // Display filtered jobs
    displayJobs(filteredJobs);
}
/* ================= EVENT LISTENERS ================= */
// Search while typing
document.getElementById(
    "searchInput"
).addEventListener(
    "input",
    filterJobs
);
// Filter by category
document.getElementById(
    "categoryFilter"
).addEventListener(
    "change",
    filterJobs
);
// Filter by location
document.getElementById(
    "locationFilter"
).addEventListener(
    "change",
    filterJobs
);
/* ================= JOB DETAILS ================= */
/*   This function opens the job details modal. */
function showJobDetails(id) {
    // Find the selected job
    const job =
        jobs.find(function(item) {
            return item.id === id;
        });
    // Put job information into the modal
    document.getElementById(
        "detailTitle"
    ).textContent = job.title;
    document.getElementById(
        "detailCompany"
    ).textContent =
        "Company: " + job.company;
    document.getElementById(
        "detailLocation"
    ).textContent =
        "Location: " + job.location;
    document.getElementById(
        "detailCategory"
    ).textContent =
        "Category: " + job.category;
    document.getElementById(
        "detailSalary"
    ).textContent =
        "Salary: " + job.salary;
    document.getElementById(
        "detailDescription"
    ).textContent =
        job.description;
    // Store selected job ID
    // for the Apply button
    document.getElementById(
        "applyButton"
    ).dataset.jobId = job.id;
    // Show modal
    document.getElementById(
        "jobModal"
    ).style.display = "block";
}
/* ================= CLOSE MODAL ================= */
/*   Close the job details window.  */
function closeJobDetails() {
    document.getElementById(
        "jobModal"
    ).style.display = "none";
}
/* ================= APPLY ================= */
/*  This function demonstrates the
    Apply Now button.  */
function applyForJob() {
    const jobId =
        document.getElementById(
            "applyButton"
        ).dataset.jobId;
    const job =
        jobs.find(function(item) {
            return item.id == jobId;
        });
    alert(
        "Application started for " +
        job.title +
        " at " +
        job.company +
        "."
    );
}
/* ================= CLOSE MODAL BY CLICKING OUTSIDE ================= */
/*  If the user clicks outside the modal,
    close it. */
window.addEventListener(
    "click",
    function(event) {
        const modal =
            document.getElementById("jobModal");
        if (event.target === modal) {
            closeJobDetails();
        }
    }
);
/* ================= INITIAL DISPLAY ================= */
// Display all jobs when the page loads
displayJobs();