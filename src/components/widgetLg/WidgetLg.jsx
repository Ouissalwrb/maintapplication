import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">nouveaux articles</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Article</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">quantité</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?cs=srgb&dl=pexels-mike-1181772.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Article1</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">1</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?cs=srgb&dl=pexels-mike-1181772.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Article2</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">3</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?cs=srgb&dl=pexels-mike-1181772.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Article3</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">10</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?cs=srgb&dl=pexels-mike-1181772.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Article4</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">1</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
