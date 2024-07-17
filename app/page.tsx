import { GameField, GameInfo, GameTitle } from "./game";
import { Header } from "./header/index";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-[616px] pt-6">
        <GameTitle className="mb-4" />
        <GameInfo className="mb-6" />
        <GameField />
      </main>
    </>
  );
}
