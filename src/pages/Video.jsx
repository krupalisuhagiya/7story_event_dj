
import "./Video.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wedding from "../../public/images/video/dulha entry.MP4";
import carnival from "../../public/images/video/carnival.mp4";
import dayro from "../../public/images/video/dayro.mp4";
import dj from "../../public/images/video/dj.mp4";
import engagement1 from "../../public/images/video/engagement 1.mp4";
import engagement from "../../public/images/video/engagement.mp4";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
// ==============///================
const videos = [
    {
        title: "Royal Wedding",
        src: wedding,
        description:
            "Celebrate your special day with our premium wedding planning, elegant décor, royal entry, varmala setup, and unforgettable moments.",
    },
    {
        title: "Carnival",
        src: carnival,
        description:
            "Bring fun, colors, entertainment, and excitement together with a lively Carnival celebration",
    },
    {
        title: "Dayro",
        src: dayro,
        description:
            "Experience the joy of traditional music and cultural celebrations with a vibrant Dayro event.",
    },
    {
        title: "Dj",
        src: dj,
        description:
            "Turn up the energy with exciting music, beats, and an unforgettable party atmosphere.",
    },
    {
        title: "Engagement Ceremony",
        src: engagement1,
        description:
            "Celebrate your beautiful beginning with elegant décor and a memorable Engagement celebration.",
    }, {
        title: "Engagement Ceremony",
        src: engagement,
        description:
            "Celebrate the start of your forever with beautiful décor and unforgettable moments.",
    },
];

function Video() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const pageRef = useRef(null);
    const bannerRef = useRef(null);
    const cardsRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            /* =========================
               HEADING
            ========================== */

            gsap.fromTo(
                bannerRef.current.querySelector("h1"),
                {
                    opacity: 0,
                    y: -70,
                    scale: 0.75,
                    rotateX: -60,
                    transformPerspective: 1200,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.2,
                    ease: "back.out(1.5)",
                }
            );

            gsap.fromTo(
                bannerRef.current.querySelector("p"),
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.25,
                    ease: "power3.out",
                }
            );


            /* =========================
               VIDEO FLIP
            ========================== */

            const cards =
                cardsRef.current.querySelectorAll(".video-card");

            cards.forEach((card) => {

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        rotateY: 360,
                        scale: 0.65,
                        transformPerspective: 1400,
                        transformOrigin: "center center",
                    },
                    {
                        opacity: 1,
                        rotateY: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            toggleActions:
                                "play none none none",
                        },
                    }
                );

            });

            ScrollTrigger.refresh();

        }, pageRef);

        return () => ctx.revert();

    }, []);

    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedVideo]);
    return (
        <section ref={pageRef} className="video-page">

            <div ref={bannerRef} className="video-banner">
                <h1 className="fade-down">Our Event Videos</h1>
                <p className="fade-up">
                    Experience the beautiful moments captured from our memorable events.
                </p>
            </div>

            <div ref={cardsRef} className="video-container">
                {videos.map((video, index) => (
                    <div className="video-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div
                            className="video-thumbnail"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <video
                                src={video.src}
                                muted
                                preload="metadata"
                            />


                        </div>

                        <div className="video-content">
                            <h3>{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {selectedVideo && (
                <div
                    className="video-popup"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className="close-btn"
                            onClick={() => setSelectedVideo(null)}
                        >
                            ✕
                        </span>

                        <div className="popup-body">

                            <div className="popup-video">
                                <video
                                    src={selectedVideo.src}
                                    controls
                                    autoPlay
                                />
                            </div>

                            <div className="popup-details">

                                <h2>{selectedVideo.title}</h2>

                                <p>{selectedVideo.description}</p>

                                <Link
                                    to="/contact-us"
                                    className="popup-btn"
                                >
                                    Book Order Now
                                </Link>

                                <a
                                    href="https://instagram.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="popup-btn instagram-btn"
                                >
                                    Instagram
                                </a>

                            </div>

                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}

export default Video;