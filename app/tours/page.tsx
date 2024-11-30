import Image from 'next/image';
import Link from 'next/link';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((tour) => {
          return (
            <Link
              className="hover:text-blue-500"
              key={tour.id}
              href={`/tours/${tour.id}`}
            >
              <div className="relative h-48 mb-2">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw,(max-widthL768px) 50vw, 33vw"
                  className="object-cover rounded"
                />
              </div>
              <h2>{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ToursPage;
