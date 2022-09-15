export interface StepItemProps {
  icon: '/icon/icon-1.png' | '/icon/icon-2.png' | '/icon/icon-3.png',
  title: string,
  desc1: string,
  desc2: string,
}

export default function StepItem(props: StepItemProps) {
  const {
    icon, title, desc1, desc2,
  } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={`${icon}`} className="mb-30 m-auto d-block" width="80" height="80" alt={`${icon}`} />
        <p className="fw-semibold text-2xl mb-2 mt-4 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
