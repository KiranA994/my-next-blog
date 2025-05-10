//server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;
var cors = require('cors')

app.use(cors())
const posts = [
    {
        "userId": 1,
        "id": 1,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/one.avif",
        "title": `sunt aut facere repellat provident occaecati
                  excepturi optio reprehenderit`,
        "body": `quia et suscipit\nsuscipit recusandae consequuntur expedita 
                 et cum\nreprehenderit molestiae ut ut quas totam\nnostrum 
                 rerum est autem sunt rem eveniet architecto`
    },
    {
        "userId": 1,
        "id": 2,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/two.avif",
        "title": "qui est esse",
        "body": `est rerum tempore vitae\nsequi sint nihil reprehenderit dolor 
                 beatae ea dolores neque\nfugiat blanditiis voluptate porro vel
                 nihil molestiae ut reiciendis\nqui aperiam non debitis possimus
                 qui neque nisi nulla`
    },
    {
        "userId": 1,
        "id": 3,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/three.avif",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": `et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
                 ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
                 porro eius odio et labore et velit aut`
    },
    {
        "userId": 1,
        "id": 4,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/four.avif",
        "title": "eum et est occaecati",
        "body": `ullam et saepe reiciendis voluptatem adipisci\nsit amet
                 autem assumenda provident rerum culpa\nquis hic commodi
                 nesciunt rem tenetur doloremque ipsam iure\nquis sunt
                 voluptatem rerum illo velit`
    },
    {
        "userId": 1,
        "id": 5,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/five.avif",
        "title": "nesciunt quas odio",
        "body": `repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem 
                 \sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest
                 aut tenetur dolor neque`
    },
    {
        "userId": 1,
        "id": 6,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/one.avif",
        "title": "dolorem eum magni eos aperiam quia",
        "body": `ut aspernatur corporis harum nihil quis provident sequi\nmollitia
                 nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit
                 accusantium quas\nvoluptate dolores velit et doloremque molestiae`
    },
    {
        "userId": 1,
        "id": 7,
        "date": "March 2, 2025",
        "read": "2 min read",
        "image": "/two.avif",
        "title": "magnam facilis autem",
        "body": `dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis 
                 quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut 
                 sequieos ea sed quas`
    }
];

const blogs = [
    {
        "id": 1,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "How to Stay Productive",
        "description": "Some tips on staying productive while working from home. This blog covers time management techniques, tools, and strategies.",
        "author": "John Doe",
        "date": "2025-04-15",
        "imageUrl": "/productivity.jfif",
    },
    {
        "id": 2,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "Mindfulness for Beginners",
        "description": "An introduction to mindfulness and how to practice it daily. Learn simple techniques to start your mindfulness journey.",
        "author": "Jane Smith",
        "date": "2025-04-10",
        "imageUrl": "/mindfulness.jpg",
    },
    {
        "id": 3,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "Healthy Eating Habits",
        "description": "Simple tips for eating healthier and feeling better. We talk about meal planning, healthy snacks, and balanced diets.",
        "author": "Alex Johnson",
        "date": "2025-04-05",
        "imageUrl": "/healthy-eating.jpg",
    },
    {
        "id": 4,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "The Power of Positive Thinking",
        "description": "Positive thinking can change your life. Learn how to train your mind to focus on the good and develop a more optimistic outlook.",
        "author": "Emily Davis",
        "date": "2025-03-28",
        "imageUrl": "/positive-thinking.jfif",
    },
    {
        "id": 5,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "How to Build Better Habits",
        "description": "Building lasting habits is key to personal growth. This blog breaks down the science behind habit formation and offers practical tips.",
        "author": "David Lee",
        "date": "2025-03-20",
        "imageUrl": "/better-habits.png",
    },
    {
        "id": 6,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "The Art of Journaling",
        "description": "Journaling can help clear your mind and spark creativity. Discover how to start journaling and its benefits for mental health.",
        "author": "Sarah Brown",
        "date": "2025-03-18",
        "imageUrl": "/journaling.jfif",
    },
    {
        "id": 7,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "Digital Detox: How to Unplug",
        "description": "A digital detox is essential for mental health. Learn tips for unplugging from your devices and reconnecting with the real world.",
        "author": "Michael Harris",
        "date": "2025-03-12",
        "imageUrl": "/digital-detox.jfif",
    },
    {
        "id": 8,
        "avatarIcon":"/avatar-icon.jpg",
        "title": "Top 10 Travel Destinations for 2025",
        "description": "Planning your next adventure? Check out our list of the top 10 travel destinations to visit in 2025, from remote islands to city escapes.",
        "author": "Olivia Williams",
        "date": "2025-02-25",
        "imageUrl": "/travel-destinations.jfif",
    }
]
// Route to get all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// Route to get a specific post by its ID
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
