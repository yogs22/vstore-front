import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string,
  link?: string,
  img: string,
  active?: boolean,
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, link = '/', img, active, onClick,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem} onClick={onClick} role="presentation" style={{ cursor: 'pointer' }}>
      <div className="me-3">
        <Image src={`/icon/${img}`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        )
          : (
            <Link href={link}>
              <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          )}
      </p>
    </div>
  );
}
