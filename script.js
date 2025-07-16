document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const dateElement = document.querySelector('.date-display');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.setAttribute('data-date', new Date().toLocaleDateString('en-US', options));
    }

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Update icon
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Search functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}\nThis would trigger an actual search in a real implementation.`);
                // In a real implementation, you would:
                // 1. Filter news items based on search term
                // 2. Or make an API call to your backend
                // 3. Update the news list with search results
            }
        });
    }

    // Load news data
    const newsList = document.getElementById('news-list');
    if (newsList) {
        // Sample news data
        const newsData = [
            {
                title: "Tech Stocks Lead Market Recovery",
                category: "MARKETS",
                excerpt: "Major tech companies show strong earnings, driving Nasdaq up 2.5% in afternoon trading.",
                image: "news1.jpg",
                author: "Jessica Williams",
                time: "1 hour ago"
            },
            {
                title: "Central Banks Coordinate on Inflation Fight",
                category: "ECONOMY",
                excerpt: "Federal Reserve, ECB, and Bank of England announce joint strategy to tackle persistent inflation.",
                image: "news2.jpg",
                author: "David Kim",
                time: "3 hours ago"
            },
            {
                title: "New Climate Regulations Pass Senate",
                category: "POLITICS",
                excerpt: "Bipartisan bill aims to reduce carbon emissions 40% by 2030 through incentives and penalties.",
                image: "news3.jpg",
                author: "Maria Gonzalez",
                time: "5 hours ago"
            },
            {
                title: "Automation Drives Manufacturing Shift",
                category: "TECHNOLOGY",
                excerpt: "Robotics and AI adoption accelerate as labor shortages persist in key industries.",
                image: "news1.jpg",
                author: "Thomas Reed",
                time: "7 hours ago"
            },
            {
                title: "Cryptocurrency Regulations Tighten Globally",
                category: "CRYPTO",
                excerpt: "G20 nations agree on framework for digital asset oversight amid market volatility.",
                image: "news2.jpg",
                author: "Lisa Wong",
                time: "9 hours ago"
            },
            {
                title: "Housing Market Shows Signs of Cooling",
                category: "ECONOMY",
                excerpt: "Price growth slows in major metros as mortgage rates remain elevated.",
                image: "news3.jpg",
                author: "Robert Johnson",
                time: "11 hours ago"
            }
        ];

        // Function to generate news HTML
        function generateNewsItem(item) {
            return `
                <article class="news-card">
                    <div class="news-image">
                        <img src="images/${item.image}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="news-content">
                        <span class="category-tag ${item.category.toLowerCase()}">${item.category}</span>
                        <h3>${item.title}</h3>
                        <p class="excerpt">${item.excerpt}</p>
                        <div class="news-meta">
                            <span class="author">By ${item.author}</span>
                            <span class="time">${item.time}</span>
                        </div>
                    </div>
                </article>
            `;
        }

        // Initial load
        newsList.innerHTML = newsData.map(generateNewsItem).join('');

        // Load more functionality
        const loadMoreBtn = document.querySelector('.load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Simulate loading more data
                setTimeout(() => {
                    // In a real app, this would be an API call
                    const moreNews = [
                        {
                            title: "Retail Sales Surprise to Upside",
                            category: "ECONOMY",
                            excerpt: "Consumer spending remains resilient despite inflation concerns, up 0.8% month-over-month.",
                            image: "news1.jpg",
                            author: "Sarah Miller",
                            time: "13 hours ago"
                        },
                        {
                            title: "EV Battery Breakthrough Announced",
                            category: "TECHNOLOGY",
                            excerpt: "New solid-state battery promises 50% more range and faster charging times.",
                            image: "news2.jpg",
                            author: "James Wilson",
                            time: "15 hours ago"
                        }
                    ];
                    
                    newsList.innerHTML += moreNews.map(generateNewsItem).join('');
                    this.textContent = 'Load More Stories';
                }, 1000);
            });
        }
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}!`);
                this.reset();
            }
        });
    }
});