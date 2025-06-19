import { Typography } from '@mui/joy';
import styles from './page.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Typography level="h1" className={styles.title}>Think Simply</Typography>
        <Typography level="body-sm" className={styles.subtitle}>posts me</Typography>
      </div>
      <div className={styles.author}>
        by Ben Hunt
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      {/* Your content will go here */}
    </main>
  );
}
