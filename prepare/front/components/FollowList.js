import React, { useMemo } from 'react';
import PropTpyes from 'prop-types';
import {List, Button, Card} from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) => {
    const ListStyle = useMemo(()=> ({marginBottom: 20}), []);
    const loadMoreStyle = useMemo(()=> ({textAlign: 'center', margin: '10px 0'}), []);
    const ListItemStyle = useMemo(() => ({marginTop: 20}), []);

    return (
        <List style={ListStyle} 
        header={<div>{header}</div>} 
        grid={{ gutter: 4, xs: 2, md: 3 }} 
        size="small" 
        loadMore={<div style={loadMoreStyle}>
            <Button>
                더보기
            </Button>
        </div>} 
        bordered 
        dataSource={data} 
        renderItem={(item) => (
            <List.Item style={ListItemStyle}>
              <Card actions={[<StopOutlined key="stop"/>]}>
                <Card.Meta description={item.nickname} />
              </Card>
            </List.Item>
          )}
        />
    );
}

FollowList.propTypes = {
    header: PropTpyes.string.isRequired,
    data: PropTpyes.array.isRequired,
}

export default FollowList;