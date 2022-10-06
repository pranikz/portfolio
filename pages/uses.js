import Container from "components/Container";
import Image from "next/future/image";

export default function Uses() {
  return (
    <Container
      title="Uses – Pratyush Mahapatra"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, gaming, and music.
          Most of these have been accumulated over the past few years.
        </p>
        <Image
          className="rounded-lg"
          alt={`My computer desk`}
          src="https://res.cloudinary.com/dg6y2dtpl/image/upload/v1665064347/setup_ipqyfj.jpg"
          width={2164 / 2}
          height={1546 / 2}
          priority
        />

        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>
              16&quot; HP OMEN 16.1 inch Gaming Laptop PC 16-c0000 (2W4Q0AV){" "}
            </li>
            <li>27&quot; Acer Aopen 27HC1R P</li>
            <li>Logitech G305</li>
            <li>Redragon K599 Wireless Keyboard (Red Switches)</li>
            <li>Boat Immortal 200</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>Editor: VSCode</li>
            <li>
              Theme:{" "}
              <a href="https://marketplace.visualstudio.com/items?itemName=SreetamD.karma">
                Karma
              </a>
            </li>
            <li>Terminal: Command Prompt / WSL</li>
          </ul>
          <h3 id="software">Software</h3>
          <ul>
            <li>Notion</li>
            <li>Spotify</li>
            <li>LightShot</li>
            <li>Grammarly</li>
            <li>Discord</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>iPhone 13</li>
            <li>Mi 10T Pro</li>
            <li>Samsung Galaxy Tab S6 lite </li>
            <li>Google Home Mini</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
