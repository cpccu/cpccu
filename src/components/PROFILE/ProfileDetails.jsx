export default function ProfileDetails() {
  return (
    <main className="bg-white mx-5 p-5 lg:mx-0 lg:sticky lg:top-28">
      <h2 className="text-2xl font-semibold pb-2 text-black/70">Details</h2>
      <section className="pl-5">
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
      </section>
    </main>
  );
}

function DetailItem() {
  return (
    <main className="flex items-center justify-start gap-5">
      <div className=" font-semibold text-black">title : </div>
      <div className="font-custom text-black/75">Lorem, ipsum.</div>
    </main>
  );
}
