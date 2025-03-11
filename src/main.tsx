import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import '@/reset.scss';
import styles from '@/main.module.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className={styles.container}>
			<div className={styles.blackSquare}></div>
		</div>
	</StrictMode>,
);
